package main

import (
	"log"

	"job-backend/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	log.Println("Initilizing server....")
	e:=echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET,echo.POST,echo.PUT},
	}))

	e.GET("/job-service/health-check",func(c echo.Context) error{
		return c.JSON(200,map[string]interface{}{
		"data":"success"})
	})

	v1:=e.Group("/job-service/api/v1")

	routes.Initialize(v1)

	e.Logger.Fatal(e.Start("0.0.0.0:8080"))
}