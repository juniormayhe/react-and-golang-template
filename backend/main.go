package main

import (
	"log"
	"net/http"
)

func setupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Println(w, "Simple Server")
	})
}

func main() {
	setupRoutes()

	http.ListenAndServe(":8080", nil)
}
