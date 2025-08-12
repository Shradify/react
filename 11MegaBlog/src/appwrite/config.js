import conf from "../conf/conf";
import{Client, Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //documentId
                {
                    title,
                    featuredImage,
                    status,
                    userId,
                    content,
                },
            )
        } catch (error) {
            console.log("createPost :: error", error);
        }
    }

    async updatePost({title, slug, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //documentId
                {
                    title,
                    featuredImage,
                    status,
                    content,
                },
            )
        } catch (error) {
            console.log("UpdatePost :: error", error);
        }
    }

    async dltPost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //documentId
            )
            return true; //see doc it has no content in response so return alg se true handle inn frontend.
        } catch (error) {
            console.log("DltPost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //documentId
            )
        } catch (error) {
            console.log("getPost :: error", error);
        }
    }

    async listPost(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //documentId
                queries, //ya to yhi likh dete
                Query.limit(3), //pagination    
            )
        } catch (error) {
            console.log("listPost :: error", error);
            return false //ek bhi value nhi mili
        }
    }//used status as key only bcoz indexes bnae the status ko key bnaya tha or tbhi queries lga skte h bs.

}

const service = new Service()

export default service