import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const DialogBox = () => {
  return (
    <Dialog defaultOpen>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[500px] bg-white mx-auto">
        <DialogHeader className="bg-blue-500 p-4 sm:p-6 my-0 rounded-t-lg">
          <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-white">
            MAKE YOUR TRAVEL SIMPLE
          </DialogTitle>
          <DialogDescription className="text-center text-white mt-1 sm:mt-2 text-sm sm:text-base">
            Best Price Assurance by Book-Fly-drive-Stay
          </DialogDescription>
        </DialogHeader>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Looking for Discounted Deal Upto 50%
            </h3>
            <a
              href="tel:+1 (844) 954-5425"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-lg transition-colors"
            >
              Click to Call Our Travel Expert
              <br />
              +1 (844) 954-5425
            </a>
          </div>

          <div className="border-t border-gray-200 pt-3 sm:pt-4">
            <p className="text-center text-gray-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Special Discounted Offers
              <br />
              Available On Phone Calls Only
            </p>
          </div>

          <div className="bg-yellow-100 p-3 sm:p-4 rounded-lg text-center">
            <p className="font-bold text-gray-800 text-sm sm:text-base">
              Call us now and get deal on your Price
            </p>
          </div>

          <div className="flex justify-between space-x-3 sm:space-x-4">
            <a href="tel:+1 (844) 954-5425" className="flex w-full">
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base">
                Call 24/7 Support
              </Button>
            </a>
          </div>
        </div>

        <DialogFooter className="sm:justify-center border-t border-gray-200 p-3 sm:p-4">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="border-gray-300 hover:bg-gray-100 text-sm sm:text-base"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;