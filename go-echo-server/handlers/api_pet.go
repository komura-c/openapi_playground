package handlers

import (
	"net/http"
	"strconv"

	"github.com/GIT_USER_ID/GIT_REPO_ID/models"
	"github.com/labstack/echo/v4"
)

// AddPet - Add a new pet to the store
func (c *Container) AddPet(ctx echo.Context) error {
    return ctx.JSON(http.StatusOK, models.HelloWorld {
        Message: "Hello World",
    })
}


// DeletePet - Deletes a pet
func (c *Container) DeletePet(ctx echo.Context) error {
    return ctx.JSON(http.StatusOK, models.HelloWorld {
        Message: "Hello World",
    })
}


// FindPetsByStatus - Finds Pets by status
func (c *Container) FindPetsByStatus(ctx echo.Context) error {
    return ctx.JSON(http.StatusOK, models.HelloWorld {
        Message: "Hello World",
    })
}


// FindPetsByTags - Finds Pets by tags
func (c *Container) FindPetsByTags(ctx echo.Context) error {
    return ctx.JSON(http.StatusOK, models.HelloWorld {
        Message: "Hello World",
    })
}


// GetPetById - Find pet by ID
func (c *Container) GetPetById(ctx echo.Context) error {
    petId, err := strconv.ParseInt(ctx.Param("petId"), 10, 64)
    if err != nil {
        return echo.NewHTTPError(http.StatusBadRequest, "Invalid ID supplied")
    }
    return ctx.JSON(http.StatusOK, models.Pet {
        Id: petId,
        Name: "doggie",
        Category: models.Category {
            Id: 1,
            Name: "Dogs",
        },
        PhotoUrls: []string {
            "http://test.com/image1.jpg",
        },
        Tags:  []models.Tag {
            {
                Id: 1,
                Name: "Dogs",
            },
        },
        Status: "available",
    })
}


// UpdatePet - Update an existing pet
func (c *Container) UpdatePet(ctx echo.Context) error {
    return ctx.JSON(http.StatusOK, models.HelloWorld {
        Message: "Hello World",
    })
}


// UpdatePetWithForm - Updates a pet in the store with form data
func (c *Container) UpdatePetWithForm(ctx echo.Context) error {
    return ctx.JSON(http.StatusOK, models.HelloWorld {
        Message: "Hello World",
    })
}


// UploadFile - uploads an image
func (c *Container) UploadFile(ctx echo.Context) error {
    return ctx.JSON(http.StatusOK, models.HelloWorld {
        Message: "Hello World",
    })
}
