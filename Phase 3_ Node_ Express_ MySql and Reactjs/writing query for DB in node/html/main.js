async function submitForm(event, endpoint) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    try {
        let res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        let msg = await res.text();
        alert(msg);
        form.reset();
    } catch (err) {
        alert("Error: " + err);
    }
}
