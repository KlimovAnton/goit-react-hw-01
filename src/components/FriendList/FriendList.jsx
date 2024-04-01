import FriendListItem from "../FriendListItem/FriendListItem"
import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendList ( {friendsData} ) {
    return (
        <ul className={css.list}>
            {friendsData.map((friend) => 
            (
                <li className={css.item} key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            ))
            }
            
        </ul>
    )
}