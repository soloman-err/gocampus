const Graduates = () => {
  return (
    <section className="px-10 md:px-20 lg:px-40 mt-20">
        <h2 className="text-center text-xl uppercase font-bold">Graduates Gallery</h2>

      <div className="grid grid-cols-3 gap-4 p-4">
        {/* Row 1 */}
        <div className="col-span-3 md:col-span-2 flex items-center justify-center text-white rounded-md overflow-hidden">
          <img className="w-full h-60 object-cover" src="https://www.edgehill.ac.uk/wp-content/uploads/2022/06/Graduation.jpg" alt="edgehill" />
        </div>

        <div className="bg-green-500 col-span-3 md:col-span-1 flex items-center justify-center text-white rounded-md overflow-hidden">
          <img className="w-full h-60 object-cover" src="https://pbs.twimg.com/media/E1VtU4LX0AMHe33.jpg" alt="" />
        </div>

        {/* Row 2 */}
        <div className="bg-yellow-500 col-span-3 md:col-span-1 flex items-center justify-center text-white rounded-md overflow-hidden">
          <img className="w-full h-60 object-cover" src="https://edib.harvard.edu/sites/hwpi.harvard.edu/files/styles/os_slideshow_16%3A9_820/public/dib/files/backcoversm-lipofskyphotodotcom_16473.jpg?m=1678822988&itok=nJkl56OZ" alt="" />
        </div>
        <div className="bg-indigo-500 col-span-3 md:col-span-2 flex items-center justify-center text-white rounded-md overflow-hidden">
          <img className="w-full h-60 object-cover" src="https://www.edgehill.ac.uk/wp-content/uploads/2022/06/Graduation.jpg" alt="" />
        </div>

        {/* Row 3 */}
        <div className="bg-purple-500 col-span-3 md:col-span-1 flex items-center justify-center text-white rounded-md overflow-hidden">
          <img className="w-full h-60 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfzhcnT2liSPknjsASM455velg1eqhqe9zuL8NC6Gr0T_1mpVHwUP3zCV-DchQBaxyoQ&usqp=CAU" alt="" />
        </div>
        <div className="bg-purple-500 col-span-3 md:col-span-2 flex items-center justify-center text-white rounded-md overflow-hidden">
          <img className="w-full h-60 object-cover" src="https://nus.edu.sg/cfg/images/default-source/about-us/about-us-cfg-group-photo.jpg?sfvrsn=19cd1c62_2" alt="" />
        </div>

        {/* Row 4 */}
        <div className="bg-teal-500 col-span-3 md:col-span-2 hlex items-center justify-center text-white rounded-md overflow-hidden">
          <img className="w-full h-60 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuN50ja9cIMPrGjKVrB54SgGwPNJDpA3BAQ&usqp=CAU" alt="" />
        </div>
        <div className="bg-orange-500 col-span-3 md:col-span-1 flex items-center justify-center text-white rounded-md overflow-hidden">
          <img className="w-full h-60 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDHRRIR9fOdmg6hvsfQECMjGnRkOH1ypDpQ&usqp=CAU" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Graduates;
