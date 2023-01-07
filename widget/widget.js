function openInNewTab() {
    let url = "";

    if (navigator.appVersion.indexOf("Mac") != -1) 
        url = "file:///Volumes/media/";

    if (navigator.appVersion.indexOf("Win") != -1) 
        url = "Windows";


    window.open(url, '_blank').focus();
}