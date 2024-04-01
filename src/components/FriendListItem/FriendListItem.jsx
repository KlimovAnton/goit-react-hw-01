import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({friend: {avatar, name, isOnline}}) {
    return (

        <div className={css.box}>
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(css.friendText, isOnline ? css.valid : css.inValid)}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    )
}