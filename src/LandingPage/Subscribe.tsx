import { Button, TextInput } from "@mantine/core"

const Subscribe=()=>{
  return <div className="mt-20 pb-5 flex items-center bg-mine-shaft-900 mx-24 py-3 rounded-xl justify-around">
              <div className="text-4xl w-2/5 text-mine-shaft-100 text-center">Never Wants to miss any <span className="text-azure-radiance-400"> Job News?</span></div>
                 <div className="flex items-center bg-mine-shaft-700 gap-4 rounded-xl px-3 py-2">
                 <TextInput
                 className="[&_input]:text-mine-shaft-100"
      variant="unstyled"
      size="xl"
      placeholder="Your@gmail.com"
    />

<Button className="rounded-lg"  size="lg" color="azure-radiance.4" variant="filled">Subscribe</Button>

                 </div>
  </div>
}

export default Subscribe