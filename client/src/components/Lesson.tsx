import { Box, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton/Skeleton';
import {useEffect, useState} from 'react';
import MarkdownToHtml from './MarkdownToHtml';

interface LessonProps{
    lessonId: string
}

interface LessonInfo{
    _id: string
    title: string
    url: string
    description: string
    comments: string[]
    createdAt: string
    updatedAt: string
    __v: 0
}

function Lesson(props: LessonProps) {
    const {lessonId} = props;
    console.log(lessonId)
    const [data, setData] = useState<LessonInfo>();

    useEffect(() =>{
        async function fetchData() {
            try {
              const response = await fetch(`/lesson/${lessonId}`);
              const jsonData = await response.json();
              
      
              if(jsonData.error){
                alert("Nenhum Módulo encontrado");
              }
              else{
                setData(jsonData.lesson);
                
              }
            } catch (error) {
              console.error('Erro ao buscar os dados:', error);
            }
        }
        fetchData();
    }, []);

    if(data){
       console.log(data) 
    }

    return (
        <div>
            {!data ? (
                <Skeleton variant="rounded" width={"100%"} height={"100%"} />
            ) : (
                <div>
                    <div className='lesson'>
                        <iframe src={`https://www.youtube-nocookie.com/embed/${data.url}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <Box sx={{mt: 5}}>
                        <MarkdownToHtml code={data.description} />
                    </Box>
                    
                </div>    
            )}
            
        </div>
    )
}

export default Lesson;