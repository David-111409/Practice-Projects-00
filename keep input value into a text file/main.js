function saveToFile() {
    // get input value
    const text = document.getElementById("myInput").value;

    // create a blob with the text
    const blob = new Blob([text], { type: "text/plain" });

    // create a temporary link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "myTextFile.txt"; // file name

    // trigger the download
    link.click();

    // clean up
    URL.revokeObjectURL(link.href);
  }

  saveToFile();