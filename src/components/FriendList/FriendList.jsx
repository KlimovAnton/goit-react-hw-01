import FriendListItem from "../FriendListItem/FriendListItem"

export default function FriendList ( {friendsData} ) {
    return (
        <ul>
            {friendsData.map((friend) => 
            (
                <li key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            ))
            }
            
        </ul>
    )
}