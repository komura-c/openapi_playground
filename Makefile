.PHONY: gen-server
gen-server:
	openapi-generator generate -i openapi.yaml -g go-echo-server -o ./go-echo-server

.PHONY: gen-client
gen-client:
	openapi-generator generate -i openapi.yaml -g typescript-fetch -o ./angular-client/src/app/lib/api/petstore

.PHONY: gen-server-docker
gen-server-docker:
	docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/openapi.yaml \
		-g go-echo-server \
		-o /local/go-echo-server

.PHONY: gen-client-docker
gen-client-docker:
	docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/openapi.yaml \
		-g typescript-fetch \
		-o /local/angular-client/src/app/api/petstore