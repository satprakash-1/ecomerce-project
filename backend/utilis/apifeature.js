class Apifeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }

    search(){
        const keyword = this.queryStr.keyword

        ?{
            name: {
                $regex:this.queryStr.keyword,
                $options:"i",
            },
        }

   : {};

   console.log(keyword);
   this.query = this.query.find({...keyword});
   return this;



    }

    filter(){
      
      const queryCopy = {...this.queryStr}
      console.log(queryCopy);
      // removing some fields for category

      const removeFields = ["keywords","page","limit"];

      removeFields.forEach(key=> delete queryCopy[key]);
        
        this.query = this.query.find(queryCopy);
        return this;
        
      };
    
    }


module.exports = Apifeatures