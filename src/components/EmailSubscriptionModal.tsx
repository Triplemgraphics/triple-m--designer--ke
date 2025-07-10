
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Download, CheckCircle, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  designId: string | null;
}

export const EmailSubscriptionModal = ({ isOpen, onClose, designId }: EmailSubscriptionModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    
    // Simulate subscription process
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      
      toast({
        title: "Successfully Subscribed!",
        description: "Check your email for the download link.",
        variant: "default",
      });

      // Auto close after success
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
        setName("");
        onClose();
      }, 2000);
    }, 2000);
  };

  if (isSubscribed) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Welcome Aboard!</h3>
            <p className="text-gray-300 mb-4">
              Your download link has been sent to your email.
            </p>
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
              <p className="text-yellow-400 text-sm">
                🎉 You now have access to all premium designs!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            <Gift className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            Unlock Premium Designs
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center">
            Subscribe to get instant access to high-quality design resources and exclusive content.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg p-4 mb-6 border border-yellow-500/30">
          <h4 className="font-semibold text-yellow-400 mb-2">What you get:</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>✨ Access to 50+ premium designs</li>
            <li>🚀 High-resolution downloads</li>
            <li>📧 Weekly new design updates</li>
            <li>🎨 Exclusive templates & resources</li>
          </ul>
        </div>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-300">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-300">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubscribing}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {isSubscribing ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                Subscribing...
              </div>
            ) : (
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Subscribe & Download
              </div>
            )}
          </Button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          By subscribing, you agree to receive design updates and resources. Unsubscribe anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
};
