import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import RateLimitUI from '../components/RateLimitUI';
import NoteCard from '../components/Notecard';
import api from '../lib/axios';
import NotesNotFound from '../components/NotesNotFound';
import toast from 'react-hot-toast';

const HomePage = () => {
    const [israteLimit, setIsRateLimit] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        const fetchNotes = async () =>{
            try {
              const res = await api.get("/notes");
              console.log(res.data);
              setNotes(res.data);
              setIsRateLimit(false)
            } catch (error) {
              console.log("Error fetching notes", error.response);
              if(error.response?.status === 429){
                setIsRateLimit(true);
              }else{
                toast.error("Failed to load notes")
              }
            }finally{
              setLoading(false);
            }
        }
        fetchNotes();
    }, [])

  return (
    <div className='min-h-screen'>
        <NavBar />
        {israteLimit && <RateLimitUI />}
        <div className='max-w-7xl mx-auto p-4 mt-6'>
          {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}
          {notes.length === 0 && !israteLimit && <NotesNotFound />}
          {notes.length > 0 && !israteLimit && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {notes.map((note) => (
                  <NoteCard key={note._id} note={note} setNotes={setNotes}/>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default HomePage