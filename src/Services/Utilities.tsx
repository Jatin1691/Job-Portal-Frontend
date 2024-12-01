const formateDate=(dateString:string)=>{
    const date=new Date(dateString);
    const options={year:'numeric' as const, month:'short' as const};
    return date.toLocaleString('en-US',options);
}

function timeAgo(time:string) {
    const now = new Date();
    const postedDate = new Date(time);
    const differenceInSeconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

    if (differenceInSeconds < 60) {
        return `${differenceInSeconds} seconds ago`;
    }

    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    if (differenceInMinutes < 60) {
        return `${differenceInMinutes} minutes ago`;
    }

    const differenceInHours = Math.floor(differenceInMinutes / 60);
    if (differenceInHours < 24) {
        return `${differenceInHours} hours ago`;
    }

    const differenceInDays = Math.floor(differenceInHours / 24);
    if (differenceInDays < 30) {
        return `${differenceInDays} days ago`;
    }

    const differenceInMonths = Math.floor(differenceInDays / 30);
    if (differenceInMonths < 12) {
        return `${differenceInMonths} months ago`;
    }

    const differenceInYears = Math.floor(differenceInMonths / 12);
    return `${differenceInYears} years ago`;
}
const getBase64=(file:any)=>{
    return new Promise((resolve,reject)=>{
      const reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>resolve(reader.result);
      reader.onerror=error=>reject(error);
    })
  }
export {formateDate,timeAgo,getBase64};