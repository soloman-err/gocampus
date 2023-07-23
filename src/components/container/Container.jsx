const Container = ({children}) => {
    return (
        <div className='max-w-[2520px] xl:px-40 lg:px-10 md:px-5 mx-auto'>
            {children}
        </div>
    );
};

export default Container;