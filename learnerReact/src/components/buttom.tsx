function MyButtom ({label,onClick,className}:any){
    return(
        <>
            <button className={className} onClick={onClick}>
                {label}
            </button>
        </>
    )
}

export default MyButtom;