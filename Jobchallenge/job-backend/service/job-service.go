package service

import (
	"job-backend/constants"
	"job-backend/models"
	"time"

	"github.com/google/uuid"
)

type JobService struct {
}

var RepoData = []models.Job{{uuid.New(),"Job1",time.Minute,constants.Pending}}

func (j JobService) GetJobs() ([]models.Job,error) {
	return RepoData,nil
}
