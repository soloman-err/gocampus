const Container = ({children}) => {
    return (
        <div className='max-w-[2520px] xl:px-60 lg:px-20 md:px-10 mx-auto'>
            {children}
        </div>
    );
};

export default Container;