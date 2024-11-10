searchImages = async (e) => {
    e.preventDefault();
    this.setState({ loader: true })
    const res = await axios.get(`https://api.pexels.com/v1/search?query=${this.state.keyword}&per_page=15&page=1`,
        {
            headers: {
                Authorization: `xVgqo1uTE6bMswU4iZWlb0BRuy1NR8YDXWxgFjIRPQ71VoBog5qNj9bs`
            },
        }
    );
    this.setState({ loader: false });
    this.setState({ photos: res.data.photos });
    console.log(this.state.photos);
}   
            <div className="row">
               {
                    !this.state.loader (
                        this.state.photos.map((img) => <Image image={img}
                            key={img.id} />)
                    ) (
                        <h1> loading...</h1>
                    )
    }
        </div>


