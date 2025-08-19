import conf from "../conf/conf";
import{Client, Databases, Storage, Query} from "appwrite";

export class FileService {
    client = new Client();
    Bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.Bucket =  new Storage(this.client)
    }

    async UploadFile({files}){
        try {
            return await this.Bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(), //used for featuredImage
                files,
            ) 
        } catch (error) {
            console.log("createFile :: error",error)
            return false
        }
    }

    async deleteFile(fileID){
        try {
            await this.Bucket.deleteFile(
                conf.appwriteBucketId,
                fileID,
            )
            return true;
        } catch (error) {
            console.log("dltfile :: error", error);
            return false
        }
    }

    //not need async very fast response
    getFilePreview(fileID){
        return this.Bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID,
        )
    }
}

const fileService = new FileService()
export default fileService