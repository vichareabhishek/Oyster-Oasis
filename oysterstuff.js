    var userName = document.getElementById('namething').value;
    var submittedDate = document.getElementById('datehere').value;
    var oysterId = document.getElementById('idhere').value;
    var oysterOrigin = document.getElementById('originhere').value;
    var liveOysters = document.getElementById('livecount').value;
    var photographOyster = document.getElementById('photograph').value;

function saveValues() {
    var frm = document.formthing2;

    var record = ""
            +       userName
            + "," + submittedDate
            + "," + oysterId
            + "," + oysterOrigin
            + "," + liveOysters
            + "," + photographOyster
            + "\n";

    frm.textarea1.value += record;
}