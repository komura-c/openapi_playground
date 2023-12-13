package models

type Customer struct {

	Id int64 `json:"id,omitempty"`

	Username string `json:"username,omitempty"`

	Address []Address `json:"address,omitempty"`
}
