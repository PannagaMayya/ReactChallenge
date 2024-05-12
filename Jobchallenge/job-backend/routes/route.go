package routes

import (
	"job-backend/controller"

	"github.com/labstack/echo/v4"
)

func Initialize(e *echo.Group) {
	initJobRoutes(e)
}

func initJobRoutes(e *echo.Group) {
	c := controller.JobController{}

	//API to get all the jobs
	e.GET("/jobs", c.GetJobs)
	//API to create a job
	e.POST("/job", c.CreateJob)

	//Websocket path
	e.GET("/ws", c.ConnectWebSocket)
}
