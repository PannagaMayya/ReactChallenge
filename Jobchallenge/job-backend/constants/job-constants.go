package constants

type JobStatus string

const (
	Pending  JobStatus = "pending"
	Running  JobStatus = "running"
	Complete JobStatus = "complete"
)
