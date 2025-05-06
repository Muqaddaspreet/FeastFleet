const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="text-lg font-bold border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="text-lg font-bold border border-black p-2 m-2"
        />
        <button className=" text-lg font-bold text-white rounded-lg bg-amber-900 p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
