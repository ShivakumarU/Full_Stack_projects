import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'

const NoteCard = ({note, setNotes}) => {
    const handleDelete = async (e, id) => {
        e.preventDefault();

        if(!window.confirm("Are you sure you want to delete the note ?")) return;

        try {
            await api.delete(`/notes/${id}`);
            setNotes((prev)=> prev.filter((note) => note._id !== id));
            toast.success("Note deleted successfully !")
        } catch (error) {
            console.log("Error deleting the note", error);
            toast.error("Failed to delete note !")
        }
    }
  return (
    <Link to={`note/${note._id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-2 border-solid border-[#f1dad7]'>
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                    {formatDate(new Date(note.createdAt))}
                </span>
                <div className='flex items-center gap-1 text-neutral-400'>
                    <PenSquareIcon className='size-4' />
                    <button onClick={(e)=>handleDelete(e, note._id)} className='btn btn-ghost btn-xs text-error'>
                        <Trash2Icon className='size-4' />
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard