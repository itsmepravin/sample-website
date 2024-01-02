import { CheckIcon } from "@heroicons/react/outline";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-20">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          obcaecati laudantium cum sunt ea quidem quas enim optio nulla?
          Aliquid.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloribus ipsam repellat odio vitae illum?
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloribus ipsam repellat odio vitae illum?
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloribus ipsam repellat odio vitae illum?
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati doloribus ipsam repellat odio vitae illum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
