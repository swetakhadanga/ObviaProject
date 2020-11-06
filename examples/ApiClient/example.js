let urlArr = [
    // "https://gaia.oxana.io/api/dataview_pid_1/yaml",
    // "https://gaia.oxana.io/api/users/yaml",
    // "https://gaia.oxana.io/api/processes/yaml",
    //"https://gaia.oxana.io/api/process_role_status_forms/yaml",
    // "https://gaia.oxana.io/api/process_users/yaml",
    // "https://gaia.oxana.io/api/forms/yaml",
    // "https://gaia.oxana.io/api/process_roles/yaml",
    // "https://gaia.oxana.io/api/dataview_pid_1/yaml"
];

for (let i = 0; i < urlArr.length; i++) {
    let url = urlArr[i];
    let arr = url.split("/");
    let title = arr[4];
    let gen = new ApiClientGen({
        "url": url,
        requestBodyParamMode: 1,
        "title": "_" + title
    });

    gen.generate().then(function (r) {
        download(r.apiTitle + ".js", r.apiSrc);

    }).then(function () {
        console.log();
    });
}

/*
 GaiaAPI_Utils.generateAndLoadDataView(url, 10).then(function (aex) { 
    console.log(aex);
});
*/