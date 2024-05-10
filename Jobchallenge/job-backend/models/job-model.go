package models

import (
	"job-backend/constants"
	"time"

	"github.com/google/uuid"
)



type Job struct {
	Id 		 uuid.UUID 	 				`json:"id"`	
	Name     string 	 				`json:"name"`
	Duration time.Duration  			`json:"duration"`
	Status 	 constants.JobStatus     	`json:"status"`
}