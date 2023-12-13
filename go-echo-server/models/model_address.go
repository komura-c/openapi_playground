package models

type Address struct {

	Street string `json:"street,omitempty"`

	City string `json:"city,omitempty"`

	State string `json:"state,omitempty"`

	Zip string `json:"zip,omitempty"`
}
