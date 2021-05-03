class Youtube{
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: "GET",
            redirect: "follow",
          };
    }

    async mostPopular(){
        return (
            fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&regionCode=KR&key=${this.key}`,
                this.getRequestOptions
              )
                .then((response) => response.json())
                .then((result) =>
                  result.items.map((item) => ({ ...item, key: item.id.videoId }))
                )
                .then((items) => items)
                .catch((error) => console.log("error", error))
        )
    }

    async search(query){
        return (
            fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&regionCode=KR&key=${this.key}`,
                this.getRequestOptions
              )
                .then((response) => response.json())
                .then((result) =>
                  result.items.map((item) => ({ ...item, key: item.id.videoId }))
                )
                .then((items) => items)
                .catch((error) => console.log("error", error))
        )
    }

}

export default Youtube;