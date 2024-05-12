package controller

import (
	"job-backend/models"
	"job-backend/service"
	"job-backend/utils"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
)

type JobController struct {
	jobService service.JobService
}

func (j JobController) GetJobs(c echo.Context) error {

	resp, err := j.jobService.GetJobs()
	if err != nil {
		return utils.ErrorResponse(c, err)
	}
	c.JSON(http.StatusOK,
		models.Response{resp, "Success", http.StatusOK})

	return nil
}

func (j JobController) CreateJob(c echo.Context) error {
	var req models.JobReq
	bErr := c.Bind(&req)
	//Request Validation
	if bErr != nil {
		return utils.ErrorResponse(c, bErr)
	}
	resp, err := j.jobService.CreateJob(req)
	if err != nil {
		return utils.ErrorResponse(c, err)
	}
	return c.JSON(http.StatusOK,
		models.Response{Data: resp,
			Message: "success",
			Code:    http.StatusOK,
		})
}

func (j JobController) ConnectWebSocket(c echo.Context) error {
	var upgrader = websocket.Upgrader{}
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }

	//Connection Upgrade
	conn, err := upgrader.Upgrade(c.Response().Writer, c.Request(), nil)
	if err != nil {
		log.Print("Upgarde failed with error: ", err)
		return utils.ErrorResponse(c, err)
	}
	j.jobService.HandleWebsocket(conn)
	return c.JSON(http.StatusOK,
		models.Response{Data: nil,
			Message: "success",
			Code:    http.StatusOK,
		})
}
