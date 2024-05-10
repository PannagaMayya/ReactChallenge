package controller

import (
	"job-backend/models"
	"job-backend/service"
	"net/http"

	"github.com/labstack/echo/v4"
)


type JobController struct{
	jobService service.JobService
}



func(j JobController) GetJobs(c echo.Context) error{
	
	resp,err := j.jobService.GetJobs()
	if err != nil{
		c.JSON(http.StatusInternalServerError,models.Response{err,err.Error(),http.StatusInternalServerError})
	}
	c.JSON(http.StatusOK, models.Response{resp,"Success",http.StatusOK})
	
	return nil
}
