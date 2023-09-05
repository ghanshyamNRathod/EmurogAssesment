import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();
type souceType =  {
    name: String;
    url : String;
}
interface News {
    title: String;
    description: String;
    content: String;
    url: String;
    image: String;
    publishedAt: String;
    source: souceType;
}

const API_URL = process.env.APIURL;
const API_KEY = process.env.APIKEY;
const getTopStories = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`${API_URL}/top-headlines?apikey=${API_KEY}`);
    let news: [News] = result.data;
    return res.status(200).json({
        message: news
    });
};

const searchNews = async (req: Request, res: Response, next: NextFunction) => {
    let searchKeyword: string = req.params.keyword;
    let result: AxiosResponse = await axios.get(`${API_URL}/search?q=${searchKeyword}&apikey=${API_KEY}`);
    let news: News = result.data;
    return res.status(200).json({
        message: news
    });
};

export default { getTopStories, searchNews };
