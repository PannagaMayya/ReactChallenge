package utils

import (
	"job-backend/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

func ErrorResponse(c echo.Context, err error) error {
	return c.JSON(http.StatusInternalServerError,
		models.Response{Message: err.Error(),
			Code: http.StatusInternalServerError,
		})
}
