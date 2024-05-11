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
	e.GET("/jobs", c.GetJobs)
	e.POST("/job", c.CreateJob)

	e.GET("/ws", c.ConnectWebSocket)
}
