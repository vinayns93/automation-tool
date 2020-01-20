
export class Repository {
    id: number;
    logicalName: string;
    findMethod: string;
    xpathQuery_PropertyName: string;
    propertyValue: string;
    tagName: string;
    featureName: string;
    module: string;
    statusID: number;
    cudStatusID: number;
    isLocked: boolean;
    lockedByUser: number;
    createdOn: Date;
    updatedOn: Date;
    userId: number;
}