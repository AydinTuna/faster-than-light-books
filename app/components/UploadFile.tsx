"use client"

function UploadFile() {
    function loadFormData(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const file = formData.get("file") as File;

        if (file) {
            fetch("/api", {
                method: "POST",
                body: formData,
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
        }
    }

    return (
        <form onSubmit={loadFormData} encType='multipart/form-data'>
            <label htmlFor="data">Data</label>
            <input type="file" name="file" />
            <button type="submit">Load Data</button>
        </form>
    )
}

export default UploadFile