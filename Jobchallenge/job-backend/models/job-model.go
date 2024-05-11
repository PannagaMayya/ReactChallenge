package models

import (
	"job-backend/constants"
	"time"

	"github.com/google/uuid"
)

type JobReq struct {
	Name     string        `json:"name"`
	Duration time.Duration `json:"duration"`
}

type Job struct {
	Id     uuid.UUID           `json:"id"`
	Status constants.JobStatus `json:"status"`
	JobReq
}
