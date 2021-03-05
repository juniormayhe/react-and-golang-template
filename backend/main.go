package main

import (
	"fmt"
	"html"
	"log"
	"net/http"
	"path"
)

func setupRoutes() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/send-email", func(w http.ResponseWriter, r *http.Request) {
		log.Println("send email " + html.EscapeString(r.URL.Path))
	})

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		buildPath := path.Clean("ui/build")
		log.Println("buildPath " + buildPath)

		buildURL := fmt.Sprintf("/%s/", buildPath)
		log.Println("buildURL " + buildURL)

		dir := http.Dir(buildPath)
		log.Println("dir " + dir)

		stripped := http.FileServer(dir)

		// http.Handle("/", http.FileServer(http.Dir("./")))

		log.Println("root " + html.EscapeString(r.URL.Path))
		stripped.ServeHTTP(w, r)
	})
	return mux
}

func main() {
	handler := setupRoutes()

	if err := http.ListenAndServe(":8080", handler); err != nil {
		log.Fatal(err)
	}
}
