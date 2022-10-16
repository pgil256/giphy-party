const $gifDiv = $("#gifDiv");
const $searchInput= $("#searchBar");

function appendGIF(res){
    let resultsSize = res.data.length;
    if (resultsSize) {
        let randomIndex = Math.floor(Math.random() * resultsSize);
        let $newGIF = $("<img>", {
            src: res.data[randomIndex].images.original.url
        });
        $gifDiv.append($newGIF);
    }
}

$("form").on("submit", async function(e){
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm, 
            api_key: "QVHuInEes4TkhjqvYmGQSaKBYrPyNtTW"
        }
    });
    appendGIF(response.data);
});

$("#remove").on("click", function(){
    $gifDiv.empty();
});