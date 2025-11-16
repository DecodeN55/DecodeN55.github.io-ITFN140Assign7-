function displayLastModified() {
    // Get the div where we'll put the date
    const lastModifiedDiv = document.getElementById("lastModified");
    // Add the last modified date of the document
    lastModifiedDiv.innerHTML = "Last Modified: " + document.lastModified;
}
