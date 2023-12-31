'use client'
import { useFormStatus } from 'react-dom'
import { FaCommentDots } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import styles from './styles/comment-button.module.css'

export default function CommentButton() {
    const { pending } = useFormStatus()
    return (
        <button
            className={styles.button}
            disabled={pending}
            title="Leave a comment"
        >
            <IconContext.Provider value={{ className: styles.commentIcon }}>
                <FaCommentDots />
            </IconContext.Provider>
            <span>{pending ? '...' : 'Comment'}</span>
        </button>
    )
}
