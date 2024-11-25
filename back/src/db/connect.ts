import mongoose from 'mongoose';
import DbConfig from '@src/DbConfig';

async function connect(){
    let dbAddress = DbConfig.Header + DbConfig.Host + ':' + DbConfig.Port + '/' + DbConfig.Name
    console.log(dbAddress)
    await mongoose.connect(dbAddress, {});
}

export default connect;