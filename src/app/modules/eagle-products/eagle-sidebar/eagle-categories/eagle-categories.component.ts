import { Component } from '@angular/core';
import { DynamicDatabase, DynamicDataSource, DynamicFlatNode } from './mock-dynamic-database.service';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'eagle-categories',
  templateUrl: './eagle-categories.component.html',
  styleUrls: ['./eagle-categories.component.scss']
})
export class EagleCategoriesComponent {

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  constructor(database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }
}
