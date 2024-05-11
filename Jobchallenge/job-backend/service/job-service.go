package service

import (
	"encoding/json"
	"job-backend/constants"
	"job-backend/models"
	"log"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

type JobService struct {
}

var RepoData = []models.Job{}

var toDos []int
var doneIds []uuid.UUID

var socketConn *websocket.Conn

var isJobRunning bool

func (j JobService) GetJobs() ([]models.Job, error) {
	return RepoData, nil
}

func (j JobService) CreateJob(req models.JobReq) (models.Job, error) {
	var dbModel models.Job
	dbModel.Id = uuid.New()
	dbModel.Name = req.Name
	dbModel.Duration = req.Duration
	dbModel.Status = constants.Pending

	RepoData = append(RepoData, dbModel)
	toDos = append(toDos, len(RepoData)-1)

	return dbModel, nil
}

func (j JobService) HandleWebsocket(conn *websocket.Conn) {
	//defer conn.Close()

	socketConn = conn
	var dbModel models.Job
	dbModel.Id = uuid.New()
	dbModel.Name = "Job1"
	dbModel.Duration = time.Second * 10
	dbModel.Status = constants.Pending

	RepoData = append(RepoData, dbModel)
	toDos = append(toDos, len(RepoData)-1)
	dbModel.Name = "Job2"
	dbModel.Duration = time.Second * 5
	RepoData = append(RepoData, dbModel)
	toDos = append(toDos, len(RepoData)-1)
	for {
		if isJobRunning {
			continue
		}
		StartNextJob()

	}
}

func WriteMessageInWebSocket(job models.Job) {
	out, _ := json.Marshal(job)
	if socketConn != nil {
		err := socketConn.WriteMessage(1, out)
		if err != nil {
			log.Println("Write failed with error:", err)
		}
	}

}

func StartNextJob() {
	if len(toDos) > 0 {
		isJobRunning = true
		minDur := toDos[0]
		ind := 0
		for i, v := range toDos {
			if RepoData[v].Duration < RepoData[minDur].Duration {
				minDur = v
				ind = i
			}
		}
		RepoData[minDur].Status = constants.Running
		WriteMessageInWebSocket(RepoData[minDur])
		time.Sleep(RepoData[minDur].Duration)
		RepoData[minDur].Status = constants.Complete
		WriteMessageInWebSocket(RepoData[minDur])
		toDos = append(toDos[:ind], toDos[ind+1:]...)
		isJobRunning = false

	} else {
		log.Println("no jobs pending")
	}

}
