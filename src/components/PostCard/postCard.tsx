import { useState } from "react"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import { DUMMY_TEXT, PROFILE_IMG } from "../../constants/appConstants"
import Card from "../Card/card"

type PostCardProps = {
    areButtonsShown?: boolean
}

const PostCard = (props: PostCardProps) => {
    const { areButtonsShown = true } = props
    const [seeMore, setSeeMore] = useState(false)
    const [isLiked, setLiked] = useState(true)
    const [isCommentSectionInPort, setCommentSectionInPort] = useState(false)

    const handleSendComment = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }
    return (
        <Card>
            <div className="flex gap-3 p-4">
                <div className="size-12 rounded-4xl">
                    <img className="rounded-4xl size-12 border-2 border-white cursor-pointer" src={PROFILE_IMG} />
                </div>
                <div>
                    <p className="text-lg font-semibold">Dummy User</p>
                    <p className="text-xs text-gray-500">SDE-II Eng. @Amazon</p>
                </div>
            </div>
            <div className="text-md p-4 my-1">
                <p
                    className={`whitespace-pre-line grow ${seeMore ? '' : 'line-clamp-2'}`}
                    title={seeMore ? undefined : DUMMY_TEXT}
                >
                    {DUMMY_TEXT}
                </p>
                <button
                    type="button"
                    onClick={() => setSeeMore((prev) => !prev)}
                    className="text-gray-500 hover:text-gray-700 font-medium text-sm mt-1 focus:outline-none cursor-pointer"
                >
                    {seeMore ? 'See less' : 'See more'}
                </button>
            </div>
            <div className="w-full h-75">
                <img className="w-full h-full object-cover" src="https://static.vecteezy.com/system/resources/thumbnails/013/556/313/small/group-of-confident-young-people-in-smart-casual-wear-discussing-business-while-having-meeting-in-office-photo.jpg" />
            </div>
            <div className="my-2 p-4 flex justify-between items-center">
                <div className="flex gap-1 items-center">
                    <ThumbUpAltIcon sx={{ color: 'blue', fontSize: 22 }} />
                    <span className="text-sm text-gray-600">5 likes</span>
                </div>
                <div className="flex gap-1 items-center">
                    <span className="text-sm text-gray-600">2 comments</span>
                </div>
            </div>
            {
                areButtonsShown && (
                    <div className="flex p-1">
                        <div onClick={() => setLiked((prev) => !prev)} className="w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 hover:bg-gray-100 cursor-pointer">
                            {isLiked ? <ThumbUpAltIcon sx={{ fontSize: 22, color: 'blue' }} /> : <ThumbUpOffAltIcon sx={{ fontSize: 22, color: 'blue' }} />}
                            <span>{isLiked ? 'Liked' : 'Like'}</span>
                        </div>
                        <div onClick={() => setCommentSectionInPort((prev) => !prev)} className="w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 hover:bg-gray-100 cursor-pointer">
                            <CommentIcon sx={{ fontSize: 22 }} />
                            <span>Comment</span>
                        </div>
                        <div className="w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 hover:bg-gray-100 cursor-pointer">
                            <SendIcon sx={{ fontSize: 22 }} />
                            <span>Share</span>
                        </div>
                    </div>

                )
            }
            {
                isCommentSectionInPort && (
                    <div className="w-full p-4">
                        <div className="flex gap-2 items-center">
                            <img src={PROFILE_IMG} alt="profileImage" className="rounded-full size-13 border-2 border-white cursor-pointer" />
                            <form className="w-full flex gap-2 border rounded-3xl" onSubmit={handleSendComment}>
                                <input placeholder="Add a comment..." className="w-full py-3 px-5 border-0 focus:border-0 focus:outline-none focus:ring-0" />
                                <button type="submit" className="cursor-pointer rounded-3xl py-2 px-2"><SendIcon /></button>
                            </form>
                        </div>
                        <div className="w-full p-4">
                            <div className="my-4">
                                <div className="flex gap-3">
                                    <img src={PROFILE_IMG} alt="profileImage" className="rounded-full size-10 border-2 border-white cursor-pointer" />
                                    <div className="cursor-pointer">
                                        <p className="text-md">Dummy User</p>
                                        <p className="text-sm text-gray-500">@Amazon SDE - II</p>
                                        <p className="my-2">Hi, This is a beautiful picture!!</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                )
            }

        </Card>
    )
}

export default PostCard