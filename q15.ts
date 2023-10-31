
export{guestName};
// 15. Changing Guest List: You just heard that one of your guests can’t make the 
// dinner, so you need to send out a new set of invitations. You’ll have to think of 
// someone else to invite.

let guestName: Array<string> = [
    "Ali Abbas",
    "Ali Ahmad",
    "Ali Muhammad",
    "Ali Shan"
   ];
   // by using for loop
for(let ind =0;ind<guestName.length;ind++){
    console.log(` My dear ${guestName[ind]}, you are inviting to dinner pleas joning us tomorrow at 5:00 . `)
};

   // guest who can not make dinner

   let guestCannotMake:string ="Ali Muhammad";
   console.log(`* ${guestCannotMake} can't make dinner.`);

   //replace guest name 

   let newGuest:string ="Ali Raza";
   guestName[2]=newGuest;

   console.log("* Second set of invitation messages ");
    
   // by using for loop
   for(let ind =0;ind<guestName.length;ind++){
    console.log(` My dear ${guestName[ind]}, you are inviting to dinner pleas joning us tomorrow at 5:00 . `)
};


