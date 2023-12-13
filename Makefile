.PHONY: gen-server
gen-server:
	openapi-generator generate -i openapi.yaml -g go-echo-server -o ./go-echo-server